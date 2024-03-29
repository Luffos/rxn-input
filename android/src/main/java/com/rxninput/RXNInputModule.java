package com.rxninput;

import android.view.InputDevice;
import android.view.KeyEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = RXNInputModule.NAME)
public class RXNInputModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RXNInput";

    private static ReactContext mReactContext;
    private static DeviceEventManagerModule.RCTDeviceEventEmitter mJSModule = null;

    private static RXNInputModule instance = null;

    public static RXNInputModule initModule(ReactApplicationContext reactContext) {
        instance = new RXNInputModule(reactContext);
        return instance;
    }

    protected RXNInputModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    private WritableMap createMap(int keyCode, KeyEvent keyEvent) {
        WritableMap map = new WritableNativeMap();

        map.putString("keyCode", "");

        String key = String.valueOf((char) keyEvent.getUnicodeChar());

        if (key.matches("^[a-zA-Z0-9]*$")) {
            map.putString("key", key);
        } else {
            map.putString("key", KeyEvent.keyCodeToString(keyCode));
        }

        map.putBoolean("shiftKey", keyEvent.isShiftPressed());
        map.putBoolean("altKey", keyEvent.isAltPressed());
        map.putBoolean("ctrlKey", keyEvent.isCtrlPressed());
        map.putBoolean("metaKey", keyEvent.isMetaPressed());
        map.putBoolean("capsLock", keyEvent.isCapsLockOn());
        map.putBoolean("numLock", keyEvent.isNumLockOn());
        map.putBoolean("scrollLock", keyEvent.isScrollLockOn());

        InputDevice device = keyEvent.getDevice();

        WritableMap deviceMap = new WritableNativeMap();
        deviceMap.putInt("id", device.getId());
        deviceMap.putString("name", device.getName());
        deviceMap.putString("descriptor", device.getDescriptor());
        deviceMap.putBoolean("isVirtual", device.isVirtual());

        map.putMap("device", deviceMap);

        WritableMap originalMap = new WritableNativeMap();
        originalMap.putInt("KeyCode", keyEvent.getKeyCode());
        originalMap.putString("keyCodeString", KeyEvent.keyCodeToString(keyCode));
        originalMap.putInt("Action", keyEvent.getAction());
        originalMap.putInt("Flags", keyEvent.getFlags());
        originalMap.putInt("UnicodeChar", keyEvent.getUnicodeChar());
        originalMap.putInt("DiplayLabel", keyEvent.getDisplayLabel());
        originalMap.putInt("RepeatCount", keyEvent.getRepeatCount());

        map.putMap("original", originalMap);


        return map;
    }

    public static void onKeyDownEvent(int keyCode, KeyEvent keyEvent) {
        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }

        mJSModule.emit("keydown", instance.createMap(keyCode, keyEvent));
    }

    public static void onKeyUpEvent(int keyCode, KeyEvent keyEvent) {
        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        mJSModule.emit("keyup", instance.createMap(keyCode, keyEvent));
    }

}
