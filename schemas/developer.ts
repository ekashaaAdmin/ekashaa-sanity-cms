import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'developer',
    title: 'Developer',
    type: 'document',
    fields: [
    defineField({
        name: 'developerName',
        title: 'Developer Name',
        type: 'string'
    }),
    defineField({
        name:  'description',
        title:  'Description',
        type: 'string'
    }),
    defineField({
        name:  'logo',
        title:  'Developer Logo',
        type: 'image'
    }),
    ]
})