Android Setup

<p>Once you have installed rxn-keylistener <a href="https://github.com/Luffos/rxn-keylistener#install">(as described here)</a>, you need to manually add some code lines to get things working as expected.<p/>

The only thing you need to do is edit the file named ```MainActivity.java``` at your project root ```PROJECT_ROOT/android/app/src/main/java/.../.../MainActivity.java```

```diff
package com.YOUR_APP;

+ import android.util.Log;
+ import android.view.KeyEvent;

+ import com.rxnkeylistener.RXNKeyListenerModule;

public class MainActivity extends ReactActivity {

+  @Override
+  public boolean onKeyDown(int keyCode, KeyEvent event) {
+    RXNKeyListenerModule.onKeyDownEvent(keyCode, event);
+    super.onKeyDown(keyCode, event);
+    return true;
+  }

+  @Override
+  public boolean onKeyUp(int keyCode, KeyEvent event) {
+    RXNKeyListenerModule.onKeyUpEvent(keyCode, event);
+    super.onKeyDown(keyCode, event);
+    return true;
+ }

  . . .
```
