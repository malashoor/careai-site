# Flutter Legal Integration Guide

## Overview
This guide shows how to integrate CareAI's legal pages with your Flutter app using `url_launcher`.

## Dependencies
Add to your `pubspec.yaml`:
```yaml
dependencies:
  url_launcher: ^6.2.5
```

## Implementation

### 1. Legal URLs
```dart
class CareAILegalUrls {
  static const String baseUrl = 'https://www.careai.app';
  
  // Legal pages
  static const String terms = '$baseUrl/legal/terms';
  static const String privacy = '$baseUrl/legal/privacy';
  
  // Localized versions
  static String localizedTerms(String locale) => '$baseUrl/$locale/legal/terms';
  static String localizedPrivacy(String locale) => '$baseUrl/$locale/legal/privacy';
}
```

### 2. Open Legal Pages
```dart
import 'package:url_launcher/url_launcher.dart';

class LegalService {
  static Future<void> openTerms({String? locale}) async {
    final url = locale != null 
        ? CareAILegalUrls.localizedTerms(locale)
        : CareAILegalUrls.terms;
    
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(
        uri,
        mode: LaunchMode.externalApplication,
      );
    }
  }

  static Future<void> openPrivacy({String? locale}) async {
    final url = locale != null 
        ? CareAILegalUrls.localizedPrivacy(locale)
        : CareAILegalUrls.privacy;
    
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(
        uri,
        mode: LaunchMode.externalApplication,
      );
    }
  }
}
```

### 3. Usage in UI
```dart
// In your signup/onboarding screen
ElevatedButton(
  onPressed: () => LegalService.openTerms(locale: 'en'),
  child: Text('Terms of Service'),
),

ElevatedButton(
  onPressed: () => LegalService.openPrivacy(locale: 'en'),
  child: Text('Privacy Policy'),
),

// Consent text (use this below your checkbox)
RichText(
  text: TextSpan(
    style: TextStyle(color: Colors.grey[600]),
    children: [
      TextSpan(text: 'By creating an account, you agree to the '),
      TextSpan(
        text: 'Terms of Service',
        style: TextStyle(
          color: Colors.blue,
          decoration: TextDecoration.underline,
        ),
        recognizer: TapGestureRecognizer()
          ..onTap = () => LegalService.openTerms(locale: 'en'),
      ),
      TextSpan(text: ' and acknowledge the '),
      TextSpan(
        text: 'Privacy Policy',
        style: TextStyle(
          color: Colors.blue,
          decoration: TextDecoration.underline,
        ),
        recognizer: TapGestureRecognizer()
          ..onTap = () => LegalService.openPrivacy(locale: 'en'),
      ),
      TextSpan(text: '. You consent to the processing of health information as described, and to receive service-related emails/SMS. You can withdraw consent in settings.'),
    ],
  ),
)
```

### 4. Arabic Support
```dart
// For Arabic users
if (locale == 'ar') {
  LegalService.openTerms(locale: 'ar');
  LegalService.openPrivacy(locale: 'ar');
}
```

### 5. Error Handling
```dart
static Future<void> openTerms({String? locale}) async {
  try {
    final url = locale != null 
        ? CareAILegalUrls.localizedTerms(locale)
        : CareAILegalUrls.terms;
    
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(
        uri,
        mode: LaunchMode.externalApplication,
      );
    } else {
      // Fallback: show in-app webview or alert
      throw Exception('Could not launch terms page');
    }
  } catch (e) {
    // Handle error gracefully
    print('Error opening terms: $e');
    // Show user-friendly error message
  }
}
```

## Testing
1. Test on both iOS and Android
2. Verify legal pages open in external browser
3. Test with different locales (en/ar)
4. Test offline scenarios
5. Verify deep linking works correctly

## Notes
- Legal pages open in external browser for better user experience
- URLs are hardcoded to prevent tampering
- Locale detection ensures users see content in their preferred language
- Error handling provides fallback options
