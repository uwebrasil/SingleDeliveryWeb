$Body = @{
    Login = ""
    Password = ""
}
 
$Parameters = @{
    Method = "POST"
    Uri =  "https://localhost:44336/api/token/tokensuperuser"
    Body = ($Body | ConvertTo-Json) 
    ContentType = "application/json"
}
Invoke-RestMethod @Parameters