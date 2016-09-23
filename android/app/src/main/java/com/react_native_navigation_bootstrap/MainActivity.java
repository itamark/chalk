package com.react_native_navigation_bootstrap;

import com.reactnativenavigation.controllers.SplashActivity;

import com.burnweb.rnpermissions.RNPermissionsPackage;  // <--- import
public class MainActivity extends SplashActivity {
	@Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
      RNPermissionsPackage.onRequestPermissionsResult(requestCode, permissions, grantResults); // very important event callback
      super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }

}
