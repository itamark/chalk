package com.react_native_navigation_bootstrap;

import android.support.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;
import java.util.Arrays;
import com.airbnb.android.react.maps.MapsPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
            new MapsPackage(),
            new RNCameraKitPackage()    
        );
  }

}
