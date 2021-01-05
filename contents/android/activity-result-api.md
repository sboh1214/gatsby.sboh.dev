---
title: '새로운 Activity Result API'
date: '2021-01-06'
---

>  출처 [https://developer.android.com/training/basics/intents/result?hl=ko](https://developer.android.com/training/basics/intents/result?hl=ko)

# 기존 API

안드로이드에서 새로운 Activity를 실행하고 그 결과를 가져오는 것은 기본적인 작업입니다. 안드로이드에서 Activity는 4대 컴포넌트 중의 하나로서, 모든 앱의 공통적인 부분이기 때문에 다른 앱을 실행하고 그 결과를 받아올 수도 있습니다. 예를 들어, 앱에서 카메라 앱을 시작하고 그 결과로 캡처된 사진을 수신할 수 있습니다. 또는 사용자가 연락처를 선택하도록 연락처 앱을 시작하여 그 결과로 연락처 세부정보를 수신합니다. (출처의 예시를 인용)

기본 startActivityForResult() 및 onActivityResult() API는 모든 API 수준의 Activity 클래스에서 사용할 수 있습니다.

일반적으로 어떤 Activity 클래스에서 다른 Activity 실행 결과를 가져오는 코드는 다음과 같습니다. 

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

# 새로운 API (Activity Result API)

이제 AndroidX Activity 라이브러리에서 해당 기능을 이용할 수 있습니다.

Activity Result API는 AndroidX Activity 1.2.0-alpha02와 Fragment 1.3.0-alpha02에서 도입되었습니다.

작성일 AndroidX Activity 기준 최신 버전은 1.2.0-rc01 입니다.

먼저 필요한 종속성을 아래와 같이 추가해 줍니다.

```
    dependencies {
        def activity_version = "1.2.0-beta01"

        // Java language implementation
        implementation "androidx.activity:activity:$activity_version"
        // Kotlin
        implementation "androidx.activity:activity-ktx:$activity_version"
    }
    
```

기존 API에서의 onActivityResult 메서드를 아래 코드로 변경합니다.

```kt
private val startActivity = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
        when (it.resultCode) {
            RESULT_OK -> // TODO
            RESULT_CANCELED -> // TODO
            else -> // TODO
        }
    }
```

새로운 API는 원하는 Activity Request마다 registerForActivityResult를 실행하기 때문에 requestCode가 존재하지 않습니다.