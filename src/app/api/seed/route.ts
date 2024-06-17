
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'



export async function GET(request: Request) { 
    
    await prisma.todo.deleteMany();

   await prisma.todo.createMany({
    data:[
        { description:' Primera description'},
        { description:' Segunda description'},
        { description:' Tercera description'},
        { description:' Cuarta description'},
        { description:' Quinta description'},

    ]
   })

    return NextResponse.json({ message: 'seed executed!'})
}
