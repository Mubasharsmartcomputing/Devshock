from PIL import Image, ImageDraw

def make_rounded_favicon():
    # Load the original favicon
    img = Image.open("public/images/favicon-32x32.png").convert("RGBA")
    
    # Create a mask for rounded corners
    mask = Image.new('L', (32, 32), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, 32, 32), fill=255)
    
    # Apply the mask to make it circular
    result = Image.new('RGBA', (32, 32), (0, 0, 0, 0))
    result.paste(img, (0, 0))
    result.putalpha(mask)
    
    # Save the rounded favicon
    result.save("public/images/favicon-32x32.png")
    print("✅ Favicon has been made rounded!")

if __name__ == "__main__":
    make_rounded_favicon()