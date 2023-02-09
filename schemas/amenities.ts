import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'amenities',
    title: 'Amenities',
    type: 'document',
    fields: [
    defineField({
        name:  'amenity',
        title:  'Amenity',
        type: 'string'
    })
    ]
})