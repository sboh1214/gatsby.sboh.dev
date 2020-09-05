---
title: 'Android R (30) 변경사항'
---

```kt
val point = Point()
val displayMetrics = DisplayMetrics()
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
    eA.display?.getRealSize(point)
    eA.display?.getRealMetrics(displayMetrics)
}
else {
    @Suppress("DEPRECATION")
    eA.windowManager.defaultDisplay.getSize(point)
    @Suppress("DEPRECATION")
    eA.windowManager.defaultDisplay.getMetrics(displayMetrics)
}
```

```kt
override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)

        //b = ActivityCameraBinding.inflate(layoutInflater)
        //setContentView(b.root)
    }
```

```kt
override fun onStart() {
    super.onStart()
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        if (window.insetsController != null) {
            window.insetsController?.hide(WindowInsets.Type.statusBars())
        }
    } else {
        @Suppress("DEPRECATION")
        window.setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        )
    }
}
```
