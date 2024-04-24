class AppConfig {

    // Server Port:
    public port = 4000;

    // Server Url:
    public serverUrl = "http://localhost:" + this.port;

    // Database Host:
    public mySqlHost = "localhost";

    // Database Name:
    public mySqlDataBase = "meetings_schedule";

    // Database User:
    public mySqlUser = "root";

    // Database Password:
    public mySqlPassword = "";

}

const appConfig = new AppConfig();
export default appConfig;