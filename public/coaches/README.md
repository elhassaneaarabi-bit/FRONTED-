# Coaches Photos — صور المدربين

ضع صور المدربين هنا بهذه الأسماء بالضبط (ratio 3:4 موصى به):

- `coach-01.jpg`
- `coach-02.jpg`
- `coach-03.jpg`
- `coach-04.jpg`
- `coach-05.jpg`
- `coach-06.jpg`

**حجم موصى به**: 600×800 بكسل · جودة JPEG عالية · أقل من 500KB

بعد رفع الصور، افتح `frontend/lib/site-config.ts` وغيّر:

```ts
image: "https://picsum.photos/seed/padelrush-coach-01/600/800",
```

إلى:

```ts
image: "/coaches/coach-01.jpg",
```

(الشيء نفسه لكل المدربين 01-06)
