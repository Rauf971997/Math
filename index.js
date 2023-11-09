function getPrototype(obj){
    let prototypes=[];
    while(obj!==null){
        let proto=Object.getPrototypeOf(obj);
        prototypes.push(proto);
        obj=proto;
    }

    return prototypes;
}


