//import { environment } from "./src/environments/environment";

const PROXY_CONFIG = [
    {
        context: ['/api'],
        //target: 'http://192.168.99.1:8001/',
        //target: 'http://localhost:8080/', // local
        target: "http://emelynbecker.com.br/api",
        //target: 'https://192.168.99.100:8443/', // docker https
//        target: `${environment.api}`, // TESTE
		
		//target: 'http://192.168.99.100:8080/', // docker
		//target: 'http://177.153.51.252:8080', // prod
        secure: true,
        logLevel: 'info',
        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;