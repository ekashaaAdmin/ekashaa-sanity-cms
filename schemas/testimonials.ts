import {defineField, defineType} from 'sanity'
import propertyInfo from './propertyInfo'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'nameOfTestimonial',
            title: 'name',
            type: 'string'
        }),
        defineField({
            name: 'propertyTestimonial',
            title: 'Property',
            type: 'reference',
            to: [{type: propertyInfo.name}]
        }),
    defineField({
        name: 'descriptionOfProperty',
        title: 'Description',
        type: 'string'
    })
    ]
})