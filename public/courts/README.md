# Courts Photos — صور الملاعب

ضع صور الملاعب هنا بهذه الأسماء (ratio 4:3 موصى به):

- `court-01.jpg` → WHOOP's Court (داخلي)
- `court-02.jpg` → Court 2 (داخلي)
- `court-03.jpg` → Court 3 (Private Indoor)
- `court-04.jpg` → Court 1 (خارجي)
- `court-05.jpg` → Court 2 (خارجي)
- `court-06.jpg` → Court 3 (خارجي)

**حجم موصى به**: 1200×900 بكسل · جودة JPEG عالية · أقل من 800KB

بعد رفع الصور، افتح `frontend/lib/site-config.ts` وبدّل:

```ts
image: "https://picsum.photos/seed/padelrush-court-01/1200/900",
```

إلى:

```ts
image: "/courts/court-01.jpg",
```
