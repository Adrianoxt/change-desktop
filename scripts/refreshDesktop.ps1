$signature = @"
using System;
using System.Runtime.InteropServices;

public class Win32 {
    [DllImport("user32.dll", CharSet = CharSet.Auto)]
    public static extern int SendMessage(IntPtr hWnd, int Msg, IntPtr wParam, IntPtr lParam);

    public const int HWND_BROADCAST = 0xffff;
    public const int WM_SETTINGCHANGE = 0x001A;
}
"@

Add-Type -TypeDefinition $signature
[Win32]::SendMessage([IntPtr]::Zero, [Win32]::WM_SETTINGCHANGE, [IntPtr]::Zero, [IntPtr]::Zero)
