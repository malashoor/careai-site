import { redirect } from 'next/navigation';

export default function FlutterAppCatchAllPage() {
  // Redirect to the static Flutter app files
  redirect('/app/index.html');
}
