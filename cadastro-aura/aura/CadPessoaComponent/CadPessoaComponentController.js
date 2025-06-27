({
    maskPhone: function (component, event, helper) {
        let isEdit = component.get("v.modalIsOpen");
        let valor = event.getSource().get("v.value") || "";
        let numeros = valor.replace(/\D/g, '');
        
        let formatado = '';
        if (numeros.length == 0) {
            formatado = '';
        } else if (numeros.length <= 2) {
            formatado = `(${numeros}`;
        } else if (numeros.length <= 3) {
            formatado = `(${numeros.slice(0,2)}) ${numeros.slice(2)}`;
        } else if (numeros.length <= 7) {
            formatado = `(${numeros.slice(0,2)}) ${numeros.slice(2,3)} ${numeros.slice(3)}`;
    	} else if (numeros.length <= 11) {
    		formatado = `(${numeros.slice(0,2)}) ${numeros.slice(2,3)} ${numeros.slice(3,7)}-${numeros.slice(7)}`;
		} else {
    		formatado = `(${numeros.slice(0,2)}) ${numeros.slice(2,3)} ${numeros.slice(3,7)}-${numeros.slice(7,11)}`;
		}

        if (!isEdit) {
            let pessoa = component.get("v.pessoa");
            pessoa.Telefone__c = formatado;
            component.set("v.pessoa", pessoa);
        } else {
            let pessoa = component.get("v.editPessoa");
            pessoa.Telefone__c = formatado;
            component.set("v.editPessoa", pessoa);
        }
	},
    
    init: function (component, event, helper) {       
    	component.set('v.columns', [
        { 
        	label: 'Nome', 
            fieldName: 'Nome__c', 
            type: 'text'
        },
        { 
            label: 'Data de Nascimento', 
            fieldName: 'Data_de_Nascimento__c', 
            type: "date-local",
            typeAttributes:{
        	    month: "2-digit",
                day: "2-digit"
            }
        },
        { 
			label: 'Telefone', 
			fieldName: 'Telefone__c', 
			type: 'phone'
        }]);
            
            helper.getData(component);
    },
        
	save : function(component, event, helper) {           
		helper.savePessoa(component);
        helper.getData(component);
    },
            
	edit : function(component, event, helper) {
		const recordId = event.getSource().get("v.value");
		const records = component.get("v.data");
                
		let selected = records.find(p => p.Id === recordId);
		let pessoa = Object.assign({}, selected);
                
		if (pessoa.Data_de_Nascimento__c) {
			let date = new Date(pessoa.Data_de_Nascimento__c);
			date.setDate(date.getDate() - 1);
                    
            let formattedDate = date.toISOString().slice(0,10);
            component.set("v.correctedDate", formattedDate);
        }
        
        component.set("v.editPessoa", pessoa)
        component.set("v.modalIsOpen", true);
	},
                
	closeModal : function(component, event, helper) {
		component.set("v.modalIsOpen", false);
	},
        
	updateDataNasc : function(component, event, helper) {
		let newData = event.getSource().get("v.value");
		let pessoa = component.get("v.editPessoa");
                
		pessoa.Data_de_Nascimento__c = newData;
		component.set("v.editPessoa", pessoa);
	},
                
	saveEdit : function(component, event, helper) {
		helper.update(component);                 
		component.set("v.modalIsOpen", false);
		helper.getData(component);
	},
                    
	delete : function(component, event, helper) {
		helper.deleteP(component, event);
		helper.getData(component);
	}
})