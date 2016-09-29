CORDOVA=PATH=../node_modules/.bin:$(PATH) cordova
APPNAME=JediRouter

all: android browser

www: www/css/*.css www/img/*.png www/*.html www/js/*.js

osx: ./platforms/osx/build/$(APPNAME).app/Contents/MacOS/$(APPNAME)

android: ./platforms/android/assets ./platforms/android/build/outputs/apk/android-armv7-debug.apk ./platforms/android/build/outputs/apk/android-x86-debug.apk ./platforms/android/build/outputs/apk/android-arm64-debug.apk ./platforms/android/build/outputs/apk/android-x86_64-debug.apk

./platforms/android/assets:
	mkdir -p platforms/android/assets

browser: $(shell find www/ -type f -print)
	$(CORDOVA) build browser

./platforms/osx/build/$(APPNAME).app/Contents/MacOS/$(APPNAME): $(shell find www/ -type f -print)
	$(CORDOVA) build osx

./platforms/android/build/outputs/apk/android-armv7-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android

./platforms/android/build/outputs/apk/android-x86-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android

./platforms/android/build/outputs/apk/android-arm64-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android --xwalk64bit

./platforms/android/build/outputs/apk/android-x86_64-debug.apk: $(shell find www/ -type f -print)
	$(CORDOVA) build android --xwalk64bit

clean:
	rm -fr platforms/android/build || true
	rm -fr platforms/browser/build || true
	rm -fr platforms/osx/build || true

try: osx
	$(CORDOVA) run osx


# cordova create myApp org.apache.cordova.myApp myApp
# cordova plugin add cordova-plugin-camera --save
# cordova platform add android --save
# cordova requirements android
# cordova build android --verbose
# cordova run android
# cordova build android --release -- --keystore="..\android.keystore" --storePassword=android --alias=mykey
