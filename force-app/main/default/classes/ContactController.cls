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

    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(){ //String typeId
        return [
            SELECT  Id, Name, BoatType__c,Boat_Image__c,Contact__c,Description__c,Length__c,Price__c,Year_Built__c,Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s
            FROM    Boat__c 
            LIMIT 10
        ];
        // BoatType__c,Boat_Image__c,Contact__c,Description__c,Geolocation__c,Geolocation__Latitude__s,
        //             Geolocation__Longitude__s,Length__c,Picture__c,Price__c,Year_Built__c
    }
}