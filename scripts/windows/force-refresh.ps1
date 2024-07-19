# Save this script with a .ps1 extension, e.g., RefreshExplorer.ps1

# Get the process ID of explorer.exe
$explorer = Get-Process explorer -ErrorAction SilentlyContinue

if ($explorer) {
    # Stop the explorer process
    Stop-Process -Name explorer -Force

    # Wait for a moment to ensure the process has stopped
    Start-Sleep -Seconds 2

    # Restart explorer
    Start-Process explorer
} else {
    Write-Output "Explorer.exe is not running."
}
