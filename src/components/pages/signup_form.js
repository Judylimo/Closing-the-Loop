import { useState, useRef } from "react";
import styles from './signup_form.module.css';

export default function SignupForm() {
    const [userType, setUserType] = useState("business");
    const [businessNameValue, setBusinessNameValue] = useState("");
    const [wasteListValues, setWasteListValues] = useState("");
    const [priceListValues, setPriceListValues] = useState("");
    const [contactNameValue, setContactNameValue] = useState("");
    const [contactEmailValue, setContactEmailValue] = useState("");
    const [contactPhoneValue, setContactPhoneValue] = useState("");

    const businessNameRef = useRef(null);
    const wasteListRef = useRef(null);
    const priceListRef = useRef(null);
    const contactNameRef = useRef(null);
    const contactEmailRef = useRef(null);
    const contactPhoneRef = useRef(null);

    /* For the form to be correctly filled out:
     * If businessName is present, it must have a value.
     * If wasteList is present, it must have a value.
     * If priceList is present, it must have as many lines as wasteList, and each line must have a value that's formatted as an amount of money.
     * contactName must have a value.
     * Either contactEmail, contactPhone, or both must have a value.
     */
    function ValidateForm() {
        let formIsValid = true;

        if (userType === "business") {
            if (businessNameValue === "") {
                businessNameRef.current.setCustomValidity("Business name must have a value.");
                formIsValid = false;
            }
            else {
                businessNameRef.current.setCustomValidity("");
                formIsValid = true;
            }
            if (wasteListValues === "") {
                wasteListRef.current.setCustomValidity("Please list the waste products that your business produces.");
                formIsValid = false;
            }
            else {
                wasteListRef.current.setCustomValidity("");
                formIsValid = true;
            }
            if (wasteListValues.split('\n').length > priceListValues.split('\n').length) {
                priceListRef.current.setCustomValidity("Not enough prices listed. Must be one for each waste item.");
                formIsValid = false;
            }
            else if (wasteListValues.split('\n').length < priceListValues.split('\n').length){
                priceListRef.current.setCustomValidity("Too many prices listed. Must be one for each waste item.");
                formIsValid = false;
            }
            else {
                priceListRef.current.setCustomValidity("");
                formIsValid = true;
            }
            priceListValues.split('\n').forEach(price => {
                // The regex would need to be changed to account for other currencies
                // if this was a real website.
                if (!price.match(/^\$[0-9]{1,}\.[0-9]{2}$/)) {
                    priceListRef.current.setCustomValidity("Prices must be formatted as an amount of money (e.g. $2.99).");
                    formIsValid = false;
                }
                else {
                    priceListRef.current.setCustomValidity("");
                    formIsValid = true;
                }
            });
        }
        if (contactNameValue === "") {
            contactNameRef.current.setCustomValidity("Please provide a contact name.");
            formIsValid = false;
        }
        else {
            contactNameRef.current.setCustomValidity("");
            formIsValid = true;
        }
        if (contactEmailValue === "" && contactPhoneValue === "") {
            contactEmailRef.current.setCustomValidity("Please provide either a contact email, a cvontact phone number, or both.");
            contactPhoneRef.current.setCustomValidity("Please provide either a contact email, a cvontact phone number, or both.");
            formIsValid = false;
        }
        else {
            contactEmailRef.current.setCustomValidity("");
            contactPhoneRef.current.setCustomValidity("");
            formIsValid = true;
        }

        if (formIsValid) {
            // Replace this with code that actually saves the data and redirects to the main feed.
            alert("Thank you for signing up and helping us close the loop!");
        }
    }    

    return (
        <>
            <h1 className={styles.SignupHeader}>Sign Up</h1>
            <form id="SignUpForm" name="SignUpForm">
                <div className={styles.SignupBlock}>
                    <label htmlFor="userTypeComboBox">I am a: </label>
                    <select id="userTypeComboBox" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="business">Business</option>
                        <option value="researcher">Researcher</option>
                    </select>
                </div>
                {/* The "Business Name" and "I Produce" elements won't show     */
                 /* up unless the user chose "Business" in the drop-down above. */}
                {userType === "business" && 
                <div>
                    <div className={styles.SignupBlock}>
                        <label htmlFor="businessName">Business name (REQUIRED): </label>
                        <input type="text" className={styles.SignupInput} id="businessName" ref={businessNameRef} value={businessNameValue}
                         onChange={(e) => setBusinessNameValue(e.target.value)}></input>
                    </div>
                    <div className={styles.SignupBlock}>
                        <label htmlFor="wasteList">These are the waste products that I produce (REQUIRED): </label>
                        <textarea className={styles.SignupTextarea} id="wasteList" name="wasteItems" placeholder="Enter each waste product on a separate line."
                        ref={wasteListRef} value={wasteListValues} onChange={(e) => setWasteListValues(e.target.value)}></textarea>
                    </div>
                    <div className={styles.SignupBlock}>
                        <label htmlFor="priceList">I will sell them for (REQUIRED): </label>
                        <textarea className={styles.SignupTextarea} id="priceList" name="wastePrices" placeholder="Enter one price for each item in the &quot;waste products&quot; text area above. The price is assumed to be per unit."
                         ref={priceListRef} value={priceListValues} onChange={(e) => setPriceListValues(e.target.value)}></textarea>
                    </div>
                </div>}
                <div className={styles.SignupBlock}>
                    <label htmlFor="willBuyList">I would like to buy: </label>
                    <textarea className={styles.SignupTextarea} id="willBuyList" name="itemsToBuy" placeholder="Enter each product on a separate line."></textarea>
                </div>
                <div className={styles.SignupBlock}>
                    <label htmlFor="contactFields">Contact info (Name is REQUIRED; Email, phone, or both is REQUIRED): </label>
                    <div id="contactFields">
                        <input type="text" className={styles.SignupInput} id="contactNameField" name="contactName" placeholder="Name:" ref={contactNameRef}
                        value={contactNameValue} onChange={(e) => setContactNameValue(e.target.value)}/>
                        <input type="email" className={styles.SignupInput} id="contactEmailField" name="contactEmail" placeholder="Email:" ref={contactEmailRef}
                        value={contactEmailValue} onChange={(e) => setContactEmailValue(e.target.value)}/>
                        <input type="tel" className={styles.SignupInput} id="contactPhoneField" name="contactPhone" placeholder="Phone #:" ref={contactPhoneRef}
                        value={contactPhoneValue} onChange={(e) => setContactPhoneValue(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.SignupBlock}>
                    <input type="submit" value="Sign Up" onClick={ValidateForm}/>
                </div>
            </form>
        </>
    );
}