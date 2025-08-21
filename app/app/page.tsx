import { redirect } from 'next/navigation';

export default function FlutterAppPage() {
  // Redirect to the static Flutter app files
  redirect('/app/index.html');
}
