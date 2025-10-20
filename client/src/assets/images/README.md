# Avatar Setup Instructions

## Cách thêm avatar của bạn:

1. **Đặt hình ảnh avatar** vào thư mục này với tên `avatar.jpg` hoặc `avatar.png`

2. **Cập nhật đường dẫn** trong file `Home.tsx`:
   ```tsx
   <img 
     src="/src/assets/images/avatar.jpg" 
     alt="Huynh Ngoc Nhan" 
     className="w-full h-full object-cover"
   />
   ```

3. **Hoặc sử dụng import**:
   ```tsx
   import avatarImage from '../assets/images/avatar.jpg';
   
   <img 
     src={avatarImage} 
     alt="Huynh Ngoc Nhan" 
     className="w-full h-full object-cover"
   />
   ```

## Kích thước khuyến nghị:
- **Tối thiểu**: 320x320 pixels
- **Tối ưu**: 400x400 pixels hoặc lớn hơn
- **Định dạng**: JPG, PNG, hoặc WebP

## Lưu ý:
- Hình ảnh sẽ được crop thành hình tròn
- Nên sử dụng hình ảnh có tỷ lệ 1:1 (vuông)
- Đảm bảo chất lượng hình ảnh tốt để hiển thị rõ nét
