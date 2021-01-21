public with sharing class BoatDataService {
    
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getBoatTypes(){
        try {
            return 
                [
                    SELECT      Id, Name
                    FROM        BoatType__c
                    ORDER BY    Name ASC 
                ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        try {
            String qry = 'SELECT BoatType__c,Boat_Image__c,Contact__c,CreatedById,CreatedDate,Description__c,Geolocation__c,Geolocation__Latitude__s,Geolocation__Longitude__s,Id,IsDeleted,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Length__c,Name,Picture__c,Price__c,SystemModstamp,Year_Built__c';
            qry += ' FROM Boat__c';
            qry += (String.isNotBlank(boatTypeId) ? ' WHERE BoatType__c=\'' + boatTypeId +'\'' : '');
            qry += ' ORDER BY Name ASC';
            return (List<Boat__c>)Database.query(qry);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    // System.debug(JSON.serialize(BoatDataService.getBoats('')));
}
