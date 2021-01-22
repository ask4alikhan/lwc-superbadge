// ContactController.cls
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    // System.Debug(Json.serialize(ContactController.getContactListFiletered('bhatt')));

    // SELECT Id, Name, Title, Phone, Email
    //         FROM Contact where Name like '%bhatt%'
    //         LIMIT 10

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactListFiletered(String searchString) {
        searchString = String.isNotBlank(searchString) ? '%' + searchString + '%' : searchString;
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact where Name like : searchString
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}