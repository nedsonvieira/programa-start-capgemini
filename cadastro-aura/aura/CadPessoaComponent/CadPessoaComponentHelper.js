({  
    
    savePessoa : function(component) {
        let pessoa = component.get("v.pessoa");
        let action = component.get("c.createPessoa");
        
        if (pessoa.Data_de_Nascimento__c) {
            let date = new Date(pessoa.Data_de_Nascimento__c);
            date.setDate(date.getDate() + 1);
            
            pessoa.Data_de_Nascimento__c = date.toISOString().slice(0,10);
        }
        
        action.setParams({ p: pessoa });
        
        action.setCallback(this, $A.getCallback(function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                alert(response.getReturnValue());
                component.set("v.pessoa", {
                    'sobjectType': 'Pessoa__c',
                    Nome__c: '',
                    Telefone__c: '',
                    Data_de_Nascimento__c: ''
                });
                
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    update : function(component) {
        let pessoa = component.get("v.editPessoa");
        let action = component.get("c.updatePessoa");
        
        if (pessoa.Data_de_Nascimento__c) {
            let date = new Date(pessoa.Data_de_Nascimento__c);
            date.setDate(date.getDate() + 1);
            
            pessoa.Data_de_Nascimento__c = date.toISOString().slice(0,10);
        }
        
        action.setParams({ p: pessoa });
        
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                alert("Registro atualizado com sucesso.");
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        });
        $A.enqueueAction(action);
    },
    
    getData : function(component) {
        let action = component.get("c.getPessoas");
        action.setCallback(this, $A.getCallback(function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.data", response.getReturnValue());
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    deleteP : function(component, event) {
        const recordId = event.getSource().get("v.value");
        const records = component.get("v.data");
        
        let pessoa = records.find(p => p.Id === recordId);
       
    	let action = component.get("c.deletePessoa");
        action.setParams({ p: pessoa });
        
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                alert("Registro deletado com sucesso.");
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        });
        $A.enqueueAction(action);
    }
})