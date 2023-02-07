import {defineField, defineType} from 'sanity'
import propertyInfo from './propertyInfo'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
    defineField({
        name: 'propertyTestimonial',
        title: 'Property',
        type: 'reference',
        to: [{type: propertyInfo.name}]
    }),
    defineField({
        name: 'descriptionOfTestimonial',
        title: 'Description',
        type: 'string'
    }),
    defineField({
        name: 'descriptionOfProperty',
        title: 'Description',
        type: 'string'
    })
    ]
})