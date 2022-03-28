build:
	ionic build
	ionic cap copy
	ionic cap sync
	CAPACITOR_ANDROID_STUDIO_PATH="/snap/bin/android-studio" ionic cap open android
