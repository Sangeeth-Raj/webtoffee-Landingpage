import SectionContent from "../SectionContent";

export default function Consent() {
    return (
        <>
            <SectionContent
                lefttitle="Record every user's "
                midtitle="consent "
                righttitle="in the consent log"
                boxtext="Keep a detailed consent log/consent history as evidence when challenged"
                boxtextsize="17px"
                firstpara="Article 7(1) of the GDPR states: “Where the processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to the processing of his or her personal data”."
                buttontext="Get Plugin Now"
                sectionimage="/images/Consent-image.svg"
                flip="row-reverse"
                gdprdisplay="true"
            />
        </>
    );
}
