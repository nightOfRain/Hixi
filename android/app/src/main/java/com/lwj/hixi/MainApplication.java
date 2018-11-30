package com.lwj.hixi;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.beefe.picker.PickerViewPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.imagepicker.ImagePickerPackage;
import com.yunpeng.alipay.AlipayPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.reactnativerecordsound.ReactNativeRecordSoundPackager;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import cn.reactnative.httpcache.HttpCachePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.plugins.rntest.ExampleReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new PickerViewPackage(),
            new PickerPackage(),
            new ImagePickerPackage(),
            new AlipayPackage(),
            new ReactMaterialKitPackage(),
            new ReactNativeRecordSoundPackager(),
            new BarcodeScannerPackage(),
            new ReactNativeContacts(),
            new HttpCachePackage(),
            new VectorIconsPackage(),
            new RNSpinkitPackage(),
              new ExampleReactPackage(),
          new BaiduMapPackage(getApplicationContext()),
          new SplashScreenPackage()

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
