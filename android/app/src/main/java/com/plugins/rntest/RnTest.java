package com.plugins.rntest;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 刘文杰 on $(DATE).
 */
public class RnTest extends ReactContextBaseJavaModule {
    public RnTest(ReactApplicationContext reactContext){
        super(reactContext);
    }
    @Override
    public String getName() {
        return "RnTest";
    }

    //RN原生功能实现部分
    @ReactMethod
    public void getPackageName(){
        String name = getReactApplicationContext().getPackageName();
        Toast.makeText(getReactApplicationContext(), name, Toast.LENGTH_LONG).show();
    }
}
