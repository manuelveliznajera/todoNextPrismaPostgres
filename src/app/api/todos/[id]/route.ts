import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

interface Segments{
    params:{
        id:string
    }
}
export async function GET(request: Request, {params}:Segments) { 

    const { id }= params;
    const todo = await prisma.todo.findFirst( {where: { id }});

    if (!todo) {
        return NextResponse.json({ message : ` Todo con id ${id}, no existe`}, {status:400});
    }
        return NextResponse.json(params.id);
}

export async function PUT(request: Request, {params}:Segments) { 

    const { id }= params;
    const todo = await prisma.todo.findFirst( {where: { id }});

    if (!todo) {
        return NextResponse.json({ message : ` Todo con id ${id}, no existe`}, {status:400});
    }
    const body = await request.json();


    const todoUpdate = await prisma.todo.update({
        where:{ id },
        data : body
    })
        return NextResponse.json(params.id);
}