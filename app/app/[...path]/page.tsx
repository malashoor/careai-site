import { redirect } from 'next/navigation';

// Generate static params for static export compatibility
export function generateStaticParams() {
  return [
    { path: ['index'] },
    { path: ['main'] },
    { path: ['flutter'] }
  ];
}

export default function FlutterAppCatchAllPage() {
  // Redirect to the static Flutter app files
  redirect('/app/index.html');
}
