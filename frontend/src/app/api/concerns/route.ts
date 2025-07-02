import { NextResponse } from 'next/server';
import { concernData, ConcernItem } from './lib/data'; 
import crypto from 'crypto'; 

//GET
export async function GET(request: Request) {
  
  return NextResponse.json(concernData);
   
}

//POST
export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const mobile = formData.get('mobileNumber') as string;
        const concern = formData.get('concernTitle') as string;         
        const garden = formData.get('affectedGarden') as string;      
        const description = formData.get('description') as string; 
    
        // --- Handle Files ---
        const photos = formData.getAll('photos') as File[];
        console.log(photos)
       
        // For the main 'image', we'll take the name of the first file uploaded.
        // In a real app, you'd upload this file and store the URL.
        const image = photos.length > 0 ? photos[0].name : '/images/placeholder.png'; // Provide a default if no image is uploaded


        // --- Validation ---
        if (!concern || !garden || !description) {
            return NextResponse.json({ message: 'Missing required fields: name, location, or position' }, { status: 400 });
        }
        
        // --- Create the new GardenItem object ---
        const newConcernItem: ConcernItem = {
            id: crypto.randomUUID(), // Generate a unique string ID
            name: name, // Name of the person reporting the concern
            mobileNumber: mobile,
            concernTitle: concern, 
            affectedGarden: garden, // The garden this concern relates to
            description: description,
            acknowledgeSelection: true,
            attachedFile: null,
            status: ""
        };

        // Add the new item to our in-memory data
     
        concernData.push(newConcernItem);

        // Return a success response with the newly created item
        return NextResponse.json({ message: "Concern item added successfully!", data: newConcernItem }, { status: 201 });

    } catch (error) {
        console.error("Failed to process garden item:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}