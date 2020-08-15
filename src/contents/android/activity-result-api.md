---
title: "새로운 Activity Result API"
---

# 기존 API

<script src="https://gist.github.com/sboh1214/1584d9de4ae0a04572d68188bb1206bd.js"></script>

# 새로운 API

``` kotlin
private val startCropActivity = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
        when (it.resultCode) {
            RESULT_OK -> // TODO
            RESULT_CANCELED -> // TODO
            else -> // TODO
        }

    }
```

* 새로운 API는 원하는 Activity Request마다 registerForActivityResult를 실행하기 때문에 requestCode가 존재하지 않습니다.
