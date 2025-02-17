function convertSqlToCSharp(sqlParams) {
    const typeMap = {
        'int': 'int',
        'varchar': 'string',
        'nvarchar': 'string',
        'char': 'string',
        'text': 'string',
        'bigint': 'long',
        'bit': 'bool',
        'decimal': 'decimal',
        'numeric': 'decimal',
        'float': 'float',
        'real': 'double',
        'datetime': 'DateTime',
        'smalldatetime': 'DateTime'
    };

    return sqlParams.split('\n').map(line => {
        let match = line.trim().match(/@(\w+)\s+(\w+)(?:\(\d+\))?/);
        if (match) {
            let [, paramName, sqlType] = match;
            let csharpType = typeMap[sqlType.toLowerCase()] || 'object';
            return `${csharpType} ${paramName}`;
        }
        return '';
    }).filter(Boolean).join(', ');
}

/*
----  Example  ----
const sqlParams = `@txt_date varchar(50),
@division_id int,
@year_id int,
@revision_id int`;

console.log(convertSqlToCSharp(sqlParams));
*/
