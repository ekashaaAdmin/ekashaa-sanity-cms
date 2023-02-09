import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'Property',
    title: 'Property-Information',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Property-Name',
        type: 'string',
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'object',
        fields:[
            ({
                  name: 'address',
                  title: 'Address',
                  type: 'string',
            }),
            ({
                  name: 'pincode',
                  title: 'Pincode',
                  type: 'number',
            }),
            ({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
            }),
            ({
                  name: 'geopoint',
                  title: 'Geopoint',
                  type: 'geopoint',
            })
        ],
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
      }),
      defineField({
        name: 'developer',
        title: 'Developer',
        type: 'reference',
        to: [{type: 'developer'}]
      }),
      defineField({
        name: 'imageUrl',
        title: 'Image',
        type: 'url' 
      }),
      defineField({
        name: 'configuration',
        title: 'Configuration',
        type: 'array',
        of: [{type: 'reference', to: {type: 'totalConfiguration'}}]
      }),
      defineField({
        name: 'totalSqft',
        title: 'Total-Sqft',
        type: 'number',
      }),
      defineField({
        name: 'possessionDate',
        title: 'Possession-Date',
        type: 'datetime',
      }),
      defineField({
        name: 'propertyDescription',
        title: 'Property-Description',
        type: 'string',
      }),
      defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
      }),
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
      }),
      defineField({
        name: 'reraId',
        title: 'Rera-Id',
        type: 'number',
      }),
      defineField({
        name: 'floors',
        title: 'Floors',
        type: 'number',
      }),
      defineField({
        name: 'area',
        title: 'Area',
        type: 'number',
      }),
      defineField({
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{type: 'reference', to: {type: 'amenities'}}]
      })
    ],
  
    preview: {
      select: {
        title: '',
        author: '',
        media: '',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  })
  