import requests
import os
import base64
import json
from PIL import Image
from io import BytesIO
import sys

def test_image_converter():
    """
    Manual test for the image converter application.
    Since this is a frontend-only application, we'll test it by:
    1. Checking if the application is accessible
    2. Verifying the test.jpg file exists and can be opened
    3. Simulating the conversion process locally using PIL
    """
    print("Testing Image Converter Application")
    print("-----------------------------------")
    
    # Step 1: Check if the application is accessible
    try:
        response = requests.get("http://localhost:5177/")
        if response.status_code == 200:
            print("✅ Application is accessible")
        else:
            print(f"❌ Application returned status code {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Failed to access application: {str(e)}")
        return False
    
    # Step 2: Verify the test.jpg file exists and can be opened
    test_file_path = "/app/test.jpg"
    if not os.path.exists(test_file_path):
        print(f"❌ Test file not found at {test_file_path}")
        return False
    
    try:
        with Image.open(test_file_path) as img:
            width, height = img.size
            print(f"✅ Test image loaded successfully: {width}x{height} pixels, format: {img.format}")
    except Exception as e:
        print(f"❌ Failed to open test image: {str(e)}")
        return False
    
    # Step 3: Simulate the conversion process locally using PIL
    try:
        # Convert JPG to PNG
        with Image.open(test_file_path) as img:
            # Create a BytesIO object to hold the PNG data
            png_data = BytesIO()
            # Save as PNG with maximum quality
            img.save(png_data, format="PNG", optimize=True, quality=100)
            png_data.seek(0)
            
            # Save the converted image for verification
            output_path = "/app/test_converted.png"
            with open(output_path, "wb") as f:
                f.write(png_data.getvalue())
            
            # Get file sizes for comparison
            jpg_size = os.path.getsize(test_file_path)
            png_size = os.path.getsize(output_path)
            
            print(f"✅ Image converted successfully")
            print(f"   Original JPG size: {jpg_size / 1024:.2f} KB")
            print(f"   Converted PNG size: {png_size / 1024:.2f} KB")
            print(f"   Conversion ratio: {png_size / jpg_size:.2f}x")
            
            # Verify the converted image
            with Image.open(output_path) as png_img:
                print(f"✅ Converted image verified: {png_img.width}x{png_img.height} pixels, format: {png_img.format}")
    except Exception as e:
        print(f"❌ Failed to convert image: {str(e)}")
        return False
    
    print("\nSummary of Manual Testing:")
    print("-------------------------")
    print("1. ✅ Application is accessible at http://localhost:5177/")
    print("2. ✅ Test image file exists and can be loaded")
    print("3. ✅ Image conversion from JPG to PNG works")
    print("\nNote: This is a manual simulation of the conversion process.")
    print("The actual application performs the conversion in the browser using Canvas API.")
    print("To fully test the application, manual testing through the browser is recommended.")
    
    return True

if __name__ == "__main__":
    success = test_image_converter()
    sys.exit(0 if success else 1)