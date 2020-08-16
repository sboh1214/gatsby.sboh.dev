---
title: "새로운 Activity Result API"
---

# 기존 API

```kt
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?)
{
    if (requestCode == 1)
    {
        when (resultCode)
        {
            RESULT_OK       -> // TODO
            RESULT_CANCELED -> // TODO
            else            -> // TODO
        }
    }
    else
    {
        // TODO
    }
    super.onActivityResult(requestCode, resultCode, data)
}
```

# 새로운 API

```kt
private val startCropActivity = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
        when (it.resultCode) {
            RESULT_OK -> // TODO
            RESULT_CANCELED -> // TODO
            else -> // TODO
        }

    }
```

* 새로운 API는 원하는 Activity Request마다 registerForActivityResult를 실행하기 때문에 requestCode가 존재하지 않습니다.
