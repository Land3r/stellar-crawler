const setAnomalyEmptyItem = (item: any = null, label = 'Info : Aucune donnée trouvée', isEmptyOrNullFn = isEmptyOrNull) =>
    item === null ? { label, type: 'info', iconName: 'exclamation-sign' } : null;

export default setAnomalyEmptyItem