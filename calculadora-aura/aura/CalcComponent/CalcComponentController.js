({
    handleOperacao : function(component, event, helper) {
        var n1 = parseFloat(component.get("v.numero1"));
        var n2 = parseFloat(component.get("v.numero2"));
        var historico = component.get("v.historico");
        var itemHistorico;
        var resultado;
        
        var btn = event.getSource();
        var operacao = btn.get("v.label");
        
        var toast = component.find("notifLib");
        
        switch (operacao) {
            case "+":
                console.log("Soma: " + (n1 + n2));
                resultado = n1 + n2;
                itemHistorico = n1 + " + " + n2 + " = " + resultado;
                
                historico.push(itemHistorico);
                break;
            case "-":
                console.log("Subtração: " + (n1 - n2));
                resultado = n1 - n2;
                itemHistorico = n1 + " - " + n2 + " = " + resultado;
                
                historico.push(itemHistorico);
                break;
            case "x":
                console.log("Multiplicação: " + (n1 * n2));
                resultado = n1 * n2;
                itemHistorico = n1 + " x " + n2 + " = " + resultado;
                
                historico.push(itemHistorico);
                break;
            case "/":
                if (n2 == 0) {
                    //toast.showToast({
                    //    "title": "Divisão por 0",
                    //    "message": "Não é possível dividir por 0!",
                    //    "variant": "error"
                    //});
                    alert("Não é possível dividir por 0!");
                    return;
                } else {
                    resultado = n1 / n2;
                    itemHistorico = n1 + " / " + n2 + " = " + resultado;
                    historico.push(itemHistorico);
                }
                break;  
        }
        
        component.set("v.resultado", resultado);
        component.set("v.historico", historico);
        
    },
    
    handleLimparCampos : function(component, event, helper) {
        component.set("v.numero1", "");
        component.set("v.numero2", "");
        component.set("v.resultado", "");
    },
    
    handleLimparHistorico : function(component, event, helper) {
        var historico = component.get("v.historico");
        historico = [];
        component.set("v.historico", historico);
    }
})