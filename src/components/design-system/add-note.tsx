import React, { useState } from 'react';
import {
    Drawer,
    DrawerContent, DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Plus } from 'lucide-react';
import { Dropdown } from './dropdown';
import { set } from 'react-hook-form';

interface Note {
    id: string;
    title: string;
    content: string;
}

interface AddNoteProps {
    onAddNote: (note: Note) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAddNote }) => {
    const [open, setOpen] = useState(false);
    // State for note title and content
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [folder, setFolder] = useState(''); // State for folder selection

    const handleAddNote = () => {
        const newNote: Note = {
            id: Date.now().toString(), // Simple ID generation (consider a more robust solution for production)
            title,
            content,
        };

        onAddNote(newNote);

        setTitle('');
        setContent('');
        setOpen(false); // Close the drawer after adding the note
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="ghost" ><Plus /></Button>
            </DrawerTrigger>
            <DrawerContent className="px-4 pb-6">
                <DrawerHeader className="p-4">
                    <DrawerTitle className="text-[22px]">Add Notes</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col mb-5 gap-3">
                    <div className="flex items-center gap-2">
                        <Dropdown options={[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }]}
                            value={folder}
                            onSelect={(value => setFolder(value))
                            }
                        />
                        <Input
                            type="text"
                            placeholder="Note Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Note Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='resize-none h-32'
                    />
                </div>
                <Button
                    onClick={handleAddNote}
                    disabled={!title.trim() || !content.trim()} // Disable button if title or content is empty
                >
                    Add Note
                </Button>
            </DrawerContent>
        </Drawer >
    );
};

export default AddNote;
