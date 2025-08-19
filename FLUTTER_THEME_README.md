# Flutter Design System Alignment

This document provides the Flutter theme code that mirrors the web design system, ensuring both apps feel cohesive.

## CareTheme for Flutter

Copy this code to your Flutter project at `lib/theme/care_theme.dart`:

```dart
// lib/theme/care_theme.dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class CareTheme {
  // Apple-inspired neutral colors
  static const _ink900 = Color(0xFF111111);
  static const _ink800 = Color(0xFF1D1D1F);
  static const _ink600 = Color(0xFF3A3A3C);
  static const _ink500 = Color(0xFF515154);
  static const _ink400 = Color(0xFF6E6E73);
  static const _ink150 = Color(0xFFD2D2D7); // classic Apple border
  static const _ink50 = Color(0xFFF5F5F7);  // classic Apple ghost bg
  static const _border = Color(0xFFD2D2D7);
  static const _ghost = Color(0xFFF5F5F7);
  static const _link = Color(0xFF0066CC);    // Apple link blue
  static const _cta = Color(0xFF0071E3);     // Apple CTA blue

  static ThemeData material(BuildContext ctx) {
    return ThemeData(
      useMaterial3: true,
      fontFamily: null, // system default (SF on iOS, Roboto on Android)
      colorScheme: ColorScheme.fromSeed(
        seedColor: _cta,
        primary: _cta,
        onPrimary: Colors.white,
        surface: Colors.white,
        background: _ghost,
        onSurface: _ink800,
        onBackground: _ink800,
      ),
      scaffoldBackgroundColor: _ghost,
      textTheme: Theme.of(ctx).textTheme.apply(
        bodyColor: _ink800,
        displayColor: _ink900,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.white,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        foregroundColor: _ink900,
        titleTextStyle: TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w600,
          color: _ink900,
        ),
      ),
      dividerColor: _border,
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: _border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: _cta, width: 1.5),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: _border),
        ),
        hintStyle: const TextStyle(color: _ink500),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      ),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: _link,
          textStyle: const TextStyle(fontWeight: FontWeight.w500),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: _cta,
          foregroundColor: Colors.white,
          shape: const StadiumBorder(),
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
          elevation: 0,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: _ink900,
          side: const BorderSide(color: _border),
          shape: const StadiumBorder(),
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
        ),
      ),
      cardTheme: CardTheme(
        color: Colors.white,
        elevation: 0,
        shadowColor: Colors.black.withOpacity(.06),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: _border),
        ),
      ),
    );
  }

  static CupertinoThemeData cupertino() => const CupertinoThemeData(
    primaryColor: _cta,
    scaffoldBackgroundColor: _ghost,
    textTheme: CupertinoTextThemeData(
      textStyle: TextStyle(color: _ink800),
      primaryColor: _link,
    ),
  );
}
```

## Usage in main.dart

```dart
import 'package:flutter/material.dart';
import 'package:your_app/theme/care_theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CareAI',
      theme: CareTheme.material(context),
      // For iOS-specific styling:
      // home: CupertinoApp(
      //   theme: CareTheme.cupertino(),
      //   home: YourApp(),
      // ),
    );
  }
}
```

## Key Design Principles

1. **System Fonts**: Uses SF on iOS, Roboto on Android (no custom font bundling)
2. **Neutral Palette**: Apple-inspired ink colors for text and borders
3. **Subtle Shadows**: Minimal elevation with border rings for depth
4. **Pill Buttons**: Rounded corners matching web design
5. **Consistent Spacing**: 16px border radius, 20px horizontal padding

## Color Mapping

| Web Token | Flutter Color | Usage |
|-----------|---------------|-------|
| `ink-900` | `_ink900` | Headings, primary text |
| `ink-800` | `_ink800` | Body text |
| `ink-500` | `_ink500` | Secondary text, hints |
| `ink-150` | `_border` | Borders, dividers |
| `ink-50` | `_ghost` | Background surfaces |
| `brand-blue` | `_cta` | Primary buttons, CTAs |
| `link` | `_link` | Links, secondary actions |

## Testing Checklist

1. Verify system fonts render correctly on both platforms
2. Check button shapes match web design (pill-shaped)
3. Confirm color contrast meets accessibility standards
4. Test input field focus states
5. Verify card shadows and borders are subtle
6. Ensure consistent spacing throughout the app

*Ready for production deployment and Flutter integration! 🚀*
