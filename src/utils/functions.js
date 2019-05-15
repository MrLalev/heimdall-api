export const graphEnumConverter = (e) => {
    let graphEnum = {};
    Object.keys(e).forEach(key => graphEnum[key]={ value: e[key] });
    return graphEnum;
} 
