import { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } from 'graphql-parse-resolve-info';

export const graphEnumConverter = (e) => {
    let graphEnum = {};
    Object.keys(e).forEach(key => graphEnum[key]={ value: e[key] });
    return graphEnum;
} 

export const parseQueryFields = (resolveInfo, resolveType) => {
    const parsedResolveInfoFragment = parseResolveInfo(resolveInfo);
    const { fields } = simplifyParsedResolveInfoFragmentWithType(
                parsedResolveInfoFragment,
                resolveType
            );
    const queryFields = {};
    Object.keys(fields).forEach(key => queryFields[key] = 1);
    return queryFields;
}

export const parseFilterObject = (filter) => {
    if (filter) {
        return filter;
    }

    return {};
}