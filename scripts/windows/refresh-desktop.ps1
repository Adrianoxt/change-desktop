# Define the signature for SHChangeNotify
$signature = @"
using System;
using System.Runtime.InteropServices;

public class Shell32 {
    public const int SHCNE_ASSOCCHANGED = 0x08000000;
    public const int SHCNF_IDLIST = 0x0000;

    [DllImport("shell32.dll")]
    public static extern void SHChangeNotify(int wEventId, int uFlags, IntPtr dwItem1, IntPtr dwItem2);
}
"@

# Add the type definition to the PowerShell session
Add-Type -TypeDefinition $signature

# Call SHChangeNotify to refresh Windows Explorer
[Shell32]::SHChangeNotify([Shell32]::SHCNE_ASSOCCHANGED, [Shell32]::SHCNF_IDLIST, [IntPtr]::Zero, [IntPtr]::Zero)
