public class PessoaController {

    @AuraEnabled
    public static String createPessoa(Pessoa__c p) {
        if (p != null) {
            insert p;
        }
        
        return 'Registro com Id: ' + p.Id + ' criado com sucesso!';
    }
    
    @AuraEnabled
    public static void updatePessoa(Pessoa__c p) {
        if (p != null) {
            update p;
        }
    }
    
    @AuraEnabled
    public static List<Pessoa__c> getPessoas() {
        
        List<Pessoa__c> pessoas = [SELECT Id, Nome__c, Data_de_Nascimento__c, Telefone__c FROM Pessoa__c];
        
        return pessoas;
    }
    
    @AuraEnabled
    public static void deletePessoa( Pessoa__c p) {
        
        delete p;
    }
}