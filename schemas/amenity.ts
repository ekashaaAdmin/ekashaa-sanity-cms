import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'amenity',
    title: 'Amenity',
    type: 'document',
    fields: [
    defineField({
        name:  'amenityName',
        title:  'Name of Amenity',
        type: 'string',
        description: 'Ex. Gym, Swimming Pool, etc'
    })
    ]
})