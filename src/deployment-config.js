let deploymentTypes = {
    localDevelopment: 'development',
    development: 'development',
    production: 'production'
}
let servers = {
    localDevelopment: 'localhost',
    development: 'loanlinq.superiorloanservicing.com',
    production: 'loanlinq.superiorloanservicing.com'
}
let serverType = deploymentTypes.development;


let basic_auth_header_token = btoa('RESTAPILOANLINQ:88WeHelpU$#@');// : and / both creates same base64 code. Update=> : worked and / failed.
let authentication_servers = {
    node_server: {
        server: 'node_server',
        token: {
            endpoint: "https://loanlinq.superiorloanservicing.com:8085/api/v1/services/session/token",
            authorization: ""
        },
        login: {
            endpoint: "https://loanlinq.superiorloanservicing.com:8085/api/v1/rest/user/login.json",
            authorization: ""
        }
    },
    apex_server: {
        server: 'apex_server',
        auth_token: {
            endpoint: "http://localhost:8085/api/v1/auth/get_auth_token",
            authorization: ""
        },
        register: {
            endpoint: "https://ga84e97f5555b7d-llqdevatp.adb.us-sanjose-1.oraclecloudapps.com/ords/loanlinq/v1/registerprofile",
            authorization: basic_auth_header_token,
            headers:{ headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + basic_auth_header_token } }
        },
        login: {
            endpoint: "https://ga84e97f5555b7d-llqdevatp.adb.us-sanjose-1.oraclecloudapps.com/ords/loanlinq/v1/authenticate",
            authorization: basic_auth_header_token,
            headers:{ headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + basic_auth_header_token } }
        },
        add_account: {
            endpoint: "https://ga84e97f5555b7d-llqdevatp.adb.us-sanjose-1.oraclecloudapps.com/ords/loanlinq/v1/addaccount",
            authorization: basic_auth_header_token,
            headers:{ headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + basic_auth_header_token } }
        },
        access_account: {
            endpoint: "https://ga84e97f5555b7d-llqdevatp.adb.us-sanjose-1.oraclecloudapps.com/ords/loanlinq/v1/useraccess",
            authorization: basic_auth_header_token,
            headers:{ headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + basic_auth_header_token } }
        },
    }
}

let selected_authentication_server = authentication_servers.apex_server;

module.exports = {
    deploymentTypes,
    servers,
    serverType,
    selected_authentication_server
}
